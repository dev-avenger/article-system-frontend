import {Link} from 'react-router-dom';

export default function LoginFormMsc(){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
        <Link to="/forgot-password" className="font-medium text-emerald-600 hover:text-emerald-500">
            Forgot Password
        </Link>
        </div>
      </div>

    )
}