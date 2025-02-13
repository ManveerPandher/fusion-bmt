import React from 'react'

import { ErrorBoundary } from '@equinor/fusion-components'

import { useCurrentContext } from '@equinor/fusion'
import { Switch, Route } from 'react-router-dom'
import ProjectTabs from './views/Project/ProjectTabs'
import EvaluationView from './views/Evaluation/EvaluationView'

const App = () => {
    const currentProject = useCurrentContext()

    if (!currentProject) {
        return (
            <>
                <p>Please select a project.</p>
            </>
        )
    }

    return (
        <>
            <ErrorBoundary>
                <Switch>
                    <Route path="/:fusionProjectId" exact component={ProjectTabs} />
                    <Route path="/:fusionProjectId/evaluation/:evaluationId" exact component={EvaluationView} />
                </Switch>
            </ErrorBoundary>
        </>
    )
}

export default App
