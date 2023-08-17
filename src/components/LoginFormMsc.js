import {Link} from 'react-router-dom';

export default function LoginFormMsc(){
    return(
        <div className="flex items-center justify-between w-full my-4">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-whjte-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-white-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
        <Link to="/forgot-password" className="font-medium text-white hover:text-blue-600">
            Forgot Password
        </Link>
        </div>
      </div>

    )
}