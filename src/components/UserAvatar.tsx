import { Avatar } from 'native-base';
import React from 'react';
import { IUser } from '../data/types';

interface Props {
    user: IUser;
    size?: string;
}

const UserAvatar = ({ user, size = 'lg' }: Props) => {
    return (
        <Avatar
            shadow={4}
            borderColor='white'
            borderWidth={2}
            size={size}
            source={{
                uri: user.image,
            }}
            margin={1}
        />
    );
};

export default UserAvatar;
