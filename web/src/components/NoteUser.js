import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

// Импортируем запрос GET_ME
import { GET_ME } from '../gql/query';

const NoteUser = props => {
    const { loading, error, data } = useQuery(GET_ME);
    // Если данные загружаются, выдаем сообщение о загрузке
    if (loading) return <p>Loading...</p>;
    // Если при получении данных произошел сбой, выдаем сообщение об ошибке
    if (error) return <p>Error!</p>;

    return (
        <React.Fragment>
            Favorites: {props.note.favoriteCount}
            <br />
            {data.me.id === props.note.author.id && (
                <React.Fragment>
                <Link to={`/edit/${props.note.id}`}>Edit</Link>
                </React.Fragment>
                )}
        </React.Fragment>
    );
};
export default NoteUser;

