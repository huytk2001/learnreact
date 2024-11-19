import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/Album/Components/form-coutrolers/InputField';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit }) {
  const schema = yup.object().shape({
  title: yup.string().required('Please enter titile').min(5,'Title is too short'),
  // age: yup.number().positive().integer().required()
})
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver:yupResolver(schema)
  });

  const handleSubmit = (values) => {
    console.log('Todo form values:', values);
    // const {onSubmit}= props
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset()
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
