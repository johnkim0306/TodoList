import React from 'react'

const List = ({todo}) => {
    return (
        <li>
            <div>
                <input type="checkbox" />
                <p>{todo}</p>
            </div>
        </li>

    )
}

export default List