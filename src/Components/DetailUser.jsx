import React from 'react'
import "../App.css";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.user)
    const selectedUser = data.users.filter(user => user.id == id)
    return (
        <div>
            {
                selectedUser.map(user => <div className='Details' key={user.id}>
                    <div className='image'>
                        <img src={user.image} alt="Profile Picture" />
                    </div>
                    <div>
                        <div className='detailSection'>
                            <label>Full Name: </label>
                            <span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Age: </label>
                            <span>{user.age}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Gender: </label>
                            <span>{user.gender}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Email: </label>
                            <span>{user.email}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Phone number: </label>
                            <span>{user.phone}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Weight: </label>
                            <span>{user.weight}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Height: </label>
                            <span>{user.height}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Birth Date: </label>
                            <span>{user.birthDate}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Blood Group: </label>
                            <span>{user.bloodGroup}</span>
                        </div>
                        <div className='detailSection'>
                            <label>Eye Color: </label>
                            <span>{user.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
