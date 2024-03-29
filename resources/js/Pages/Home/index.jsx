import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import route from "ziggy";
import { PopupOverlay } from "../../components/popup/PopupOverlay";
import { PopupContainer } from "../../components/popup/PopupContainer";
import { PopupCloseButton } from "../../components/popup/PopupCloseButton";
import { PopupHeader } from "../../components/popup/PopupHeader";
import * as S from './style';


export default function Home({ taskLists }) {
    const [values, setValues] = useState({ name: '' });
    console.log(taskLists);
    function handleChange(e) {
        e.preventDefault();
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleCreateList = (e) => {
        e.preventDefault();
        router.post(route("list.store"), values);
        setShowPopupList(false);
    };

    const handleDeleteList = (e, id) => {
        e.preventDefault();
        router.delete(route("task-lists"), id);
    };

    const handleCreateTask = (e,) => {
        e.preventDefault();
        if (selectedList) {
            router.post(route("task.store", { list: selectedList }), values);
            setSelectedList(null);
            setShowPopupTask(false);

        } else {
            console.error("No task list selected");
        }
    };
    // POPUP

    const [showPopupList, setShowPopupList] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedTaskList, setSelectedTaskList] = useState(null);

    const handleTaskLitsClick = (taskLit) => {
        setSelectedTaskList(taskLit);
        setShowPopup(true);
    };

    // const handleTagConfirmRemove = (tag) => {
    //     setShowPopup(false);
    //     router.delete(route('backoffice.underflix.tag.destroy', { tag: tag.id }));
    // };

    const [showPopupTask, setShowPopupTask] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    const handleNewTask = (taskListId) => {
        setSelectedList(taskListId);
        setShowPopupTask(true);
    };

    return (
        <>
            <S.Header>
                <h1>PROLIST</h1>
                <div>
                    <S.ButtonMain onClick={() => setShowPopupList(true)}>CRIAR LISTA <i className="fa-solid fa-plus"></i></S.ButtonMain>
                    <S.ButtonMain>SAIR <i className="fa-solid fa-right-from-bracket"></i></S.ButtonMain>
                </div>
            </S.Header>

            <S.MainContainer>
                <S.ListContainer>
                    <S.Title>Listas</S.Title>
                    <S.List>
                        {taskLists && taskLists.length > 0 ? (
                            taskLists.map((list) => (
                                <S.ListItem key={list.id}>
                                    {list.name}
                                    <div>
                                        <S.ButtonSmall onClick={() => handleTaskLitsClick(list)}><i className="fa-solid fa-eye"></i></S.ButtonSmall>
                                        <S.ButtonSmall><i className="fa-solid fa-pen-to-square"></i></S.ButtonSmall>
                                        <S.ButtonSmall onClick={() => handleDeleteList(list.id)}><i className="fa-solid fa-trash"></i></S.ButtonSmall>
                                    </div>
                                </S.ListItem>
                            ))
                        ) : (
                            <p>Nenhuma lista disponível.</p>
                        )}
                    </S.List>
                </S.ListContainer>
            </S.MainContainer>

            <PopupOverlay show={showPopupList}>
                <PopupContainer minHeight="150px">
                    <PopupCloseButton onClick={() => setShowPopupList(false)}>
                        <i className="fa-solid fa-times"></i>
                    </PopupCloseButton>

                    <PopupHeader>
                        Nova lista
                    </PopupHeader>

                    <S.Form onSubmit={handleCreateList}>
                        <S.Input
                            placeholder="Nome da lista"
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            required
                        />
                        <S.ButtonForm type="submit">Criar</S.ButtonForm>
                    </S.Form>
                </PopupContainer>
            </PopupOverlay>

            <PopupOverlay show={showPopup}>
                {selectedTaskList && (
                    <PopupContainer width="800px">
                        <PopupCloseButton onClick={() => setShowPopup(false)}>
                            <i className="fa-solid fa-times"></i>
                        </PopupCloseButton>

                        <div>
                            <PopupHeader>{selectedTaskList.name}</PopupHeader>
                            <S.ButtonMain onClick={() => handleNewTask(selectedTaskList.id)}>CRIAR TAREFA<i className="fa-solid fa-plus"></i></S.ButtonMain>
                        </div>
                        {selectedTaskList && selectedTaskList.tasks.length > 0 ? (
                            <S.Container>
                                <S.TaskSection>
                                    <S.Title>Fechado</S.Title>
                                    {selectedTaskList && selectedTaskList.tasks.filter(task => task.status === 100).map((task) => (
                                        <S.TaskItem key={task.id}>{task.name}</S.TaskItem>
                                    ))}
                                </S.TaskSection>

                                <S.TaskSection>
                                    <S.Title>Em progresso</S.Title>
                                    {selectedTaskList && selectedTaskList.tasks.filter(task => task.status === 200).map((task) => (
                                        <S.TaskItem key={task.id}>{task.name}</S.TaskItem>
                                    ))}
                                </S.TaskSection>

                                <S.TaskSection>
                                    <S.Title>Concluído</S.Title>
                                    {selectedTaskList && selectedTaskList.tasks.filter(task => task.status === 300).map((task) => (
                                        <S.TaskItem key={task.id}>{task.name}</S.TaskItem>
                                    ))}
                                </S.TaskSection>
                            </S.Container>

                        ) : (
                            <p>Nenhuma task disponível.</p>
                        )}
                    </PopupContainer>
                )}
            </PopupOverlay>


            <PopupOverlay show={showPopupTask}>
                <PopupContainer minHeight="150px">
                    <PopupCloseButton onClick={() => setShowPopupTask(false)}>
                        <i className="fa-solid fa-times"></i>
                    </PopupCloseButton>

                    <PopupHeader>
                        Nova tarefa
                    </PopupHeader>

                    <S.Form onSubmit={handleCreateTask}>
                        <S.Input
                            placeholder="Nome da tarefa"
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            required
                        />
                        <S.ButtonForm type="submit">Criar</S.ButtonForm>
                    </S.Form>
                </PopupContainer>
            </PopupOverlay>
        </>
    );
}