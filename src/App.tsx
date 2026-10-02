import React from 'react';
import { DemoProvider, useDemo } from './context/DemoContext';
import { ClientDemoBar } from './components/common/ClientDemoBar';
import { DeviceFrame } from './components/common/DeviceFrame';
import { SpecsModal } from './components/common/SpecsModal';
import { HubApp } from './components/hub/HubApp';
import { SalonApp } from './components/salon/SalonApp';
import { RestaurantApp } from './components/restaurant/RestaurantApp';
import { ClinicApp } from './components/clinic/ClinicApp';
import { CheckCircle2 } from 'lucide-react';

const PrototypeRouter: React.FC = () => {
  const { currentRoute, notification } = useDemo();

  const renderActiveView = () => {
    switch (currentRoute) {
      case 'salon':
        return <SalonApp />;
      case 'restaurant':
        return <RestaurantApp />;
      case 'clinic':
        return <ClinicApp />;
      case 'hub':
      default:
        return <HubApp />;
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 flex flex-col">
      {/* Top Client Demo Controller Bar */}
      <ClientDemoBar />

      {/* Main View wrapped in Responsive Device Frame */}
      <div className="flex-1">
        <DeviceFrame>
          {renderActiveView()}
        </DeviceFrame>
      </div>

      {/* Global Architectural Specs & Deployment Modal */}
      <SpecsModal />

      {/* Toast Notifications */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in pointer-events-none">
          <div className="flex items-center gap-2.5 px-4 py-3 bg-neutral-900/95 text-white text-xs font-medium rounded-xl border border-neutral-700 shadow-2xl backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{notification}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <DemoProvider>
      <PrototypeRouter />
    </DemoProvider>
  );
}
