import { render, fireEvent, getAttribute, findByText } from '@testing-library/react'
import React from "react";
import Table from "./Table";
import data from '../data.json';

test('loads items eventually', async () => {

    const info = {Course: data["Course"], Students: data["Student"]};
    const professor = {Name: "Chris Riesbeck", Courses: ["Agile Methodology"]};

    const {findByText, getByTestId} = render(<Table course={info.Course["EECS394"]} students={info.Students} />)
    
    const item = await findByText("xqv6932")
    expect(item).toBeInTheDocument()
    // expect(item).getAttribute('key').toBe('xqv6932')

    const table = await getByTestId("Agile Software Development");
    expect(table).toBeInTheDocument()
  })