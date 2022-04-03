import { v4 as uuidv4} from 'uuid';

let providers = [
]
export const createProvider = (req, res) => {
    console.log('POST ROUTE REACHED');

    const provider = req.body;

    providers.push({ ... provider, id: uuidv4()});

    res.send(`Provider with the name ${provider.firstName} ${provider.lastName} has been added to providers list`);
};
export const getProvider = (req, res) => {

    const { id } = req.params;
    const foundProvider = providers.find((provider) => provider.id === id);
    res.send(foundProvider);
};
export const deleteProvider = (req, res) => {
    const { id } = req.params;

    providers = providers.filter((provider) => provider.id !== id);
    res.send('User deleted');
};
export const updateProvider = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const provider = providers.find((provider) => provider.id === id);
    if(firstName) provider.firstName = firstName;
    if(lastName) provider.lastName = lastName;
    if(age) provider.age = age;

    res.send('Provider updated');
};
export const getAllProviders = (req, res) => {
    console.log(providers);

    
    res.send(providers);
};