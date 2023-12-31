import React, { useEffect, useState, useMemo, createContext } from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import Response from '../components/ResponseToast';
// import Navbar from '../components/Navbar/Navbar';
// import { useSelector } from 'react-redux';
// import { socket } from '../socket';
// import { dispatch } from '../redux/store';
// import { GetUserNotifications } from '../redux/features/user/service';
// import { setUserNotifications } from '../redux/features/user/userSlice';

// export const SocketContext = createContext(null);
// export const PositionContext = createContext(null);

const DashboardLayout = () => {
  // const token = sessionStorage.getItem('token');
  const navigate = useNavigate();
  // const { user, notifications } = useSelector(state => state.user);
  // const [isConnected, setIsConnected] = useState(socket.connected);
  const [navPosition, setNavPosition] = useState(0);

  // const contextValue = useMemo(
  //   () => ({
  //     socketId: isConnected ? socket.id : null,
  //     Notifications: [...notifications],
  //   }),
  //   [isConnected, notifications]
  // );

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/dashboard') {
      setNavPosition(0);
    }
  }, [])

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/signin');
  //   }
  // }, []);

  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   return () => {
  //     socket.off('connect', onConnect);
  //     socket.off('disconnect', onDisconnect);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //     dispatch(GetUserNotifications(user.id));
  //     socket.on(user.id, (...args) => {
  //       dispatch(setUserNotifications([...args, ...notifications]));
  //     });
  //   }
  // }, [user]);

  return (
    <>
      {/* {token && ( */}
        <Box>
          {/* <SocketContext.Provider value={{ ...contextValue }}> */}
            {/* <PositionContext.Provider value={{ navPosition, setNavPosition }}> */}
            {/* <Response /> */}
            <Header />
            {/* {!pathname.includes('/event_details/') && <Navbar />} */}
            <Outlet />
            {/* </PositionContext.Provider> */}
          {/* </SocketContext.Provider> */}
        </Box>
      {/* )} */}
    </>
  );
};

export default DashboardLayout;
