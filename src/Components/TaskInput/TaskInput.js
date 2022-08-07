import React from 'react';
import {Formik} from 'formik';
import '../Body.css'

export const TaskInput = (props) => {
    return (
        <div>
            <Formik
                initialValues={{task: '', id: 0}}
                onSubmit={(values, {setSubmitting}) => {
                    props.addTask(values.task, values.id++)
                    console.log(values)
                    values.task = ''
                    setSubmitting(false)
                }}
            >
                {formik => (
                    <form onSubmit={formik.handleSubmit} className='inputRow'>
                        <label htmlFor="task" className='label-title'>Create a new task</label>
                        <div className='formFrame'>
                            <input
                                className='inputField'
                                id="task"
                                type="text"
                                name='task'
                                value={formik.values.task}
                                {...formik.getFieldProps('task')}
                                placeholder='Enter a task...'
                            />
                            <button type="submit" className='inputButton' disabled={formik.isSubmitting}>Save</button>
                        </div>

                    </form>
                )}
            </Formik>
        </div>
    )
}