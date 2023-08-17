import {Link} from 'react-router-dom';
import WalesOnline from '../images/walesonline.svg';

export default function FormHeader({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src={WalesOnline}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-white-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-white-600 hover:text-blue-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}