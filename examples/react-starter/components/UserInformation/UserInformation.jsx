// General imports
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

// Components import
import { FormBuilder, useFormBuilder, useFormField } from 'react-form-builder';
import { isNonEmptyString, resetFields } from '@enterwell/react-form-validation';

// App models import
import UserAppModel from '../../app-models/UserAppModel';

// Helpers import
import { withAppModels } from '../../helpers/ComponentsHelper';

// Styles import
import styles from './UserInformation.module.scss';

/**
 * Function represents the user information component.
 *
 * @param {Object} props Various component's props
 * @returns component's elements
 */
function UserInformation(props) {
  const {
    appModel
  } = props;
  const {
    user,
    loadUser,
    editUser
  } = appModel;

  const form = {
    userName: useFormField('', isNonEmptyString, 'string', 'Name'),
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onChangeName = () => {
    editUser(form.userName.value);
    resetFields(form);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        Hi
        {' '}
        <span className={styles.name}>{(user && user.name) || 'John Doe'}</span>
        !
      </div>
      <div className={styles.newNameWrapper}>
        That's not really my name. You should rather call me
        <FormBuilder form={form} onSubmit={onChangeName} />
      </div>
    </div>
  );
}

// Export component without injected props so we can use it in Storybook
export { UserInformation as SimpleUserInformation };

// Default export with injected App Model
export default withAppModels(observer(UserInformation), UserAppModel);
