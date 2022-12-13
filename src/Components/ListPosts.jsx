import React from 'react'
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ListPosts() {
    const { id } = useParams()
    const userListe = useSelector(state => state.user.data)
    const postsListe = useSelector(state => state.postsList.data)
    const selectedUser = userListe.users.filter(user => user.id == id)
    const selectedPosts = postsListe.posts.filter(posts => posts.id == id)
    return (
        <div>
            <h1>{`${(selectedUser[0].firstName).toUpperCase()} ${(selectedUser[0].lastName).toUpperCase()}`} Posts LIST</h1>
            <div className='Info'>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>State</td>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedPosts.map(posts => <tr key={posts.id}>
                            <td>
                                {posts.posts}
                            </td>
                            <td>
                                {posts.completed === true ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

