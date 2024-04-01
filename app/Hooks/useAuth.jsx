import React, { useContext } from 'react'

export const useAuth = () => {
	const context = useContext(AuthContext)
	return context
}

export const AuthContext = React.createContext({
	isAuth: 1,
	setIsAuth: auth => {},
})
