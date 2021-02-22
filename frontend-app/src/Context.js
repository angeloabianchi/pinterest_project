import React, {useState, useContext, createContext} from "react";

const AppContext = createContext();     /* AppContext es un contexto de react pq está criado através da função createContext() */
                                        /* React terá em conta qualquer mudança que suceda sobre esse contexto e vai notificar os */
                                        /* componentes que estão utilizando */
export const AppContextProvider = ({children}) => {                     /* Pego esse {children} e reenderizo dentro de */
    const [showModal, setShowModal] = useState(false);        /* AppContext.Provider com as seguintes props: */
                                                                        /* {showModal, setShowModal} -- para que possam ser utilizada */
                                                                        /* quando aplicar um modal em algum outro componente */

    const [isFetching, setIsFetching] = useState(true);     /* me serve para ver quando estou carregando dados */

    return (
        <AppContext.Provider value={{showModal, setShowModal, isFetching, setIsFetching}}>
            {children}
        </AppContext.Provider>                  /* está dando acesso ao componente que está dentro do AppContext.Provider */
        )                                       /* aos valores de showModal e setShowModal */
}

export const contextWrapper = Component => props => (
    <AppContextProvider>
        <Component {...props} />
    </AppContextProvider>
);

export const useAppContext = () => {
    const context = useContext(AppContext);
    return {
        ...context
    };
}

 /* export const useAppContext = () => useContext(AppContext);     <--- essa é a mesma função que a de cima */