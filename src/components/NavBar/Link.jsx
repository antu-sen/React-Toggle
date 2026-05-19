
const Link = ({route}) => {
    return (
        <li className="px-4 lg:mr-8 hover:bg-amber-500">
            <a className="text-gray-700 font-medium hover:text-blue-600 transition duration-300" href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;