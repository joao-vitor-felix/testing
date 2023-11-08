import { render, screen } from '@testing-library/react'
import RepositoriesSummary from './RepositoriesSummary'

it('display information about the repository', () => {
    const repository = {
        stargazers_count: 10,
        open_issues: 20,
        forks: 30,
        language: "JavaScript"
    }

    render(<RepositoriesSummary repository={repository}/>)

    for (let key in repository) {
        const value = repository[key]
        const element = screen.getByText(new RegExp(value))
        expect(element).toBeInTheDocument()
    }
})