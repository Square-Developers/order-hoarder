import { createStyles } from '@mantine/core'

export interface TaskProps {
    title: string;
    description: string;
    color: string;
    actions?:{
        component: () => JSX.Element;
    }[];
    status?: () => JSX.Element;
}

interface PropTypes {
    task: TaskProps;
}

const useStyles = createStyles((theme, color: string) => ({
    div: {
        display: 'flex',
    },
    h3: {
        fontWeight: 700,
        fontSize: 24,
        color: color,
        marginTop: 0,
    },
    span: {
        fontWeight: 400,
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.55)',
        width: 779
    },
    skipSpan: {
        marginRight: '1rem',
        color: '#EF476F',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        },
    },
    actionSpan: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    taskComponent: {
        backgroundColor: 'red',
        '&:last-of-type': {
            marginLeft: '16px'
        }
    },
    listHR: {
        height: 1,
        marginLeft: -16,
        marginRight: -16,
        backgroundColor: '#DEE2E6',
        color: '#DEE2E6',
        border: 'none',
        opacity: 1,
        '&:last-of-type': {
            display: 'none',
        }
    },
    temp: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto'
    }
}))

const Task = ({ task }: PropTypes) => {
    const { classes } = useStyles(task.color)
    return <>
    <div className={classes.div}>
        <div>
            <h3 className={classes.h3}>{task.title}</h3>
            <span className={classes.span}>{task.description}</span>
        </div>
        <div className={classes.temp}>
            {task.actions ? 
            <>
            {task.actions.map((action, i) => {
                return <div key={i}>{action.component()}</div>
            })}
            </> :
            null
        }
        </div>
    </div>
        {task.status ?
            <div>
                {task.status()}
            </div>
        : 
        null }
    <hr className={classes.listHR} />
    </>
}

export default Task