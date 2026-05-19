
const Link = ({route}) => {
    return (
        <li className="mr-12">
            <a className="text-gray-700 font-medium hover:text-blue-600 transition duration-300" href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;