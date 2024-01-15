import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageList from '../pages/home/pagelist';
import ErrorPage from '../pages/error/error';
import HomePage from '../pages/home/home';
import MainPage from '../pages/main/main';
import LetterPage from '../pages/letter/letter';
import Mailbox from '../pages/mailbox/mailbox';
import MailboxWrite from '../pages/mailbox/mailboxwrite';
import RedirectPage from '../components/modal/RedirectPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/home" element={<HomePage />} /><Route path="/" element={<MainPage />} />
        <Route path="/letter" component={<LetterPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/mailbox" element={<Mailbox />} />
        <Route path="/Mailboxwrite" element={<MailboxWrite />} />
        <Route path="/auth" element={<RedirectPage />} />
        <Route path="/pagelist" element={<PageList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
