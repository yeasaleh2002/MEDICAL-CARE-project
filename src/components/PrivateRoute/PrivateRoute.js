import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children , ...rest }) => {
  
   const { user } = useAuth();
  
    return (

    //   private route randering and redirect
       <Route
            {...rest}

            //rendering
            render={({location}) => user.displayName ? children
             : 


             // redirect
             <Redirect to={{
                 pathname : "/login",
                 state : {from: location}
             }}>

             </Redirect>
        }
        
        >

        </Route>
    );
};

export default PrivateRoute;