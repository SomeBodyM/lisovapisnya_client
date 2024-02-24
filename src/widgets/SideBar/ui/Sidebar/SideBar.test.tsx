import {fireEvent, screen} from "@testing-library/react";
import {SideBar} from "widgets/SideBar/ui/SideBar/SideBar";
import {renderWithTranslation} from "shared/lib/test/renderWithTranslation/renderWithTranslation";

describe('SideBar', () => {

    test('width only first param', () => {
        renderWithTranslation(<SideBar/>)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    })

    test('toggle', () => {
        renderWithTranslation(<SideBar/>);
        const toddleBTN = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toddleBTN);
        expect(screen.getByTestId("sidebar")).toHaveClass('collapsed');
    })
})