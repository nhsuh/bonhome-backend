import { v4 as uuidv4} from 'uuid';

let parents = [
]
export const createParent = (req, res) => {
    console.log('POST ROUTE REACHED');

    const parent = req.body;

    parents.push({ ... parent, id: uuidv4()});

    res.send(`parent with the name ${parent.firstName} ${parent.lastName} has been added to parents list`);
};
export const getParent = (req, res) => {

    const { id } = req.params;
    const foundParent = parents.find((parent) => parent.id === id);
    res.send(foundParent);
};
export const deleteParent = (req, res) => {
    const { id } = req.params;

    parents = parents.filter((parent) => parent.id !== id);
    res.send('User deleted');
};
export const updateParent = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const parent = parent.find((parent) => parent.id === id);
    if(firstName) parent.firstName = firstName;
    if(lastName) parent.lastName = lastName;
    if(age) parent.age = age;

    res.send('Parent updated');
};
export const getAllParents = (req, res) => {
    console.log(parents);

    
    res.send(parents);
};``
