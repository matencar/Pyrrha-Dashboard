import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './content/DashboardPage';
import DetailsPage from './content/DetailsPage';
import MapPage from './content/MapPage';

const Router = () => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState('Dashboard');

  return (
    <BrowserRouter basename="/api-dash">
      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/details/:device_id/:increment/:type"
          element={
            <DetailsPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/details/:device_id/:increment"
          element={
            <DetailsPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/details/:device_id"
          element={
            <DetailsPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/map"
          element={
            <MapPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        {/*
        <Route
          path="/login"
          element={
            <LoginPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/events"
          element={
            <EventsPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/devices"
          element={
            <DevicesPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/firefighters"
          element={
            <FirefightersPage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              active={active}
              page={page}
              setActive={setActive}
              setPage={setPage}
            />
          }
        />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
