import PropTypes from 'prop-types';
import React from 'react';
import CardTask from './CardTask';
import '../../assets/css/cardContainer.css';

const CardContainer = ({ tasks = [], title }) => {
    const hasTasks = tasks.length !== 0;
    return (
        <div id="myContainer">
            <center>
                <h2 style={{ color: '#4b90c3' }}>{title}</h2>
            </center>
            {!hasTasks && (
                <center>
                    <h2 style={{ color: '#f00', marginTop: '20%' }}>
                        No tasks yet
                    </h2>
                </center>
            )}
            {hasTasks &&
                tasks.map(task => {
                    return (
                        <center>
                            <CardTask
                                task={task}
                                key={task.id}
                                style={{ margin: '10px' }}
                            />
                        </center>
                    );
                })}
        </div>
    );
};

CardContainer.propTypes = {
    tasks: PropTypes.array,
    title: PropTypes.string,
};

export default CardContainer;
