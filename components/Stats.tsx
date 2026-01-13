import React from 'react';
import { Home, Users, HeartHandshake } from 'lucide-react';

const Stats = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Căn nhà tình nghĩa đã trao</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-vn-red sm:text-5xl font-serif flex justify-center items-center gap-2">
              <Home className="w-8 h-8 md:w-10 md:h-10 text-military-green" />
              1,250+
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Cựu binh được hỗ trợ y tế</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-vn-red sm:text-5xl font-serif flex justify-center items-center gap-2">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-military-green" />
              5,000+
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Tình nguyện viên tham gia</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-vn-red sm:text-5xl font-serif flex justify-center items-center gap-2">
              <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 text-military-green" />
              800+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;