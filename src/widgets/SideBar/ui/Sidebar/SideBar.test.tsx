import { fireEvent, screen } from '@testing-library/react'
import { SideBar } from 'widgets/SideBar'
import {componentRender} from "shared/lib/test/componentRender/componentRender";

describe('SideBar', () => {
    test('width only first param', () => {
        componentRender(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle', () => {
        componentRender(<SideBar/>)
        const toddleBTN = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toddleBTN)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
