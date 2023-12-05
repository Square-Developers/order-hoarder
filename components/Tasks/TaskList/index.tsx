import { createStyles } from '@mantine/core'
import Task, { TaskProps } from '../Task'

const useStyles = createStyles(() => ({
    listContainer: {
        padding: 16,
        borderRadius: 6,
        border: '1px solid #DEE2E6',
    },
}))

const TaskList = ({ tasks }: { tasks: TaskProps[] }) => {
    const { classes } = useStyles()
    // Check User data json to know which tasks still need to be completed
    return <div className={classes.listContainer}>
        {tasks.map((task, i) => {
            return <Task key={i} task={task} />
        })}
    </div>

}

export default TaskList