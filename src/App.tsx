/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StudentSessionProvider, useStudentSession } from './context/StudentSessionContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ExploreRoadmapModal } from './components/home/ExploreRoadmapModal';
import { useDisclosure } from './hooks/useDisclosure';

function AppContent() {
  const { startExploration } = useStudentSession();
  const roadmapModal = useDisclosure(false);

  const scrollToPaths = () => {
    const el = document.getElementById('pilihan-masa-depan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout
      onStartExplore={startExploration}
      onOpenRoadmap={roadmapModal.open}
    >
      <HomePage />

      {/* Global Roadmap Modal reachable from Navbar/Footer */}
      <ExploreRoadmapModal
        isOpen={roadmapModal.isOpen}
        onClose={roadmapModal.close}
        onScrollToPaths={scrollToPaths}
      />
    </MainLayout>
  );
}

export default function App() {
  return (
    <StudentSessionProvider>
      <AppContent />
    </StudentSessionProvider>
  );
}
