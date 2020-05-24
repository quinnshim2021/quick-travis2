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
});

test('firing button changes table data classes', async () => {
    const info = {Course: data["Course"], Students: data["Student"]};
    const professor = {Name: "Chris Riesbeck", Courses: ["Agile Methodology"]};

    const {findByText, findByTestId} = render(<Table course={info.Course["EECS394"]} students={info.Students} />)
    
    // find elements 
    const button = await findByText("Change Healthy Temp")
    expect(button).toBeInTheDocument()

    const table = await findByTestId("Agile Software Development");
    expect(table).toBeInTheDocument()

    const entry = await findByText("xqv6932")
    expect(entry).toBeInTheDocument()
    expect(entry.className).toEqual("healthy")

    const entry2 = await findByText("npv7128")
    expect(entry2).toBeInTheDocument()
    expect(entry2.className).toEqual("healthy")
    

    // fire event and test classes
    fireEvent.click(button)
    expect(entry.className).toEqual("unhealthy")
    expect(entry2.className).toEqual("unhealthy")

    fireEvent.click(button)

    expect(entry.className).toEqual("healthy")
    expect(entry2.className).toEqual("healthy")
});