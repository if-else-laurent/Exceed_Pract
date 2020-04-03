import React from 'react';

const UserAvatar = (props) => {
    const { avatar } = props;
    const defaultUrl = 'https://www.w3schools.com/howto/img_avatar.png';
    return (
        <div className='header__avatar header__item'>
            <img src={avatar ? avatar : defaultUrl} alt='avatar' />
        </div>
    )
}

export default UserAvatar;
