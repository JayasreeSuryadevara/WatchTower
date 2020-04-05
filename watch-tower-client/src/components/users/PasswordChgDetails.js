import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CHANGE_PASSWORD } from '../../graphql/mutations';
import { CURRENT_USER } from '../../graphql/queries';

export default () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const [changePassword, {loading, error}] = useMutation(
    CHANGE_PASSWORD,
    {
      variables: { oldPassword, newPassword },
      onError() {},
      update(cache, { data: { changePassword }}) {
        if (!changePassword) setErrorMessage('Invalid Credentials')
        const data = cache.readQuery({ query: CURRENT_USER })
        console.log(data)
        const me = Object.assign({}, data.me)
        cache.writeQuery( { query: CURRENT_USER, data: { me: me }});
      },
    }
  )
  return (
    <main>
      Change Password
    </main>
  )
}