import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/Album/Components/form-coutrolers/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit }) {
  const form = useForm({
    defaultValues: {
      title: '',
    },
  });

  const handleSubmit = (values) => {
    console.log('Todo form values:', values);

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
