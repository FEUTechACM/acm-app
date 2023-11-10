import Link from '@/node_modules/next/link';
import React from 'react';

interface GroupCardProps {
  groupId:string;
  group: {
    thesisTitle: any;
    abstract: any;
    summary: any;
    members: any;
    category: any;
    posterFilePath?: any;
    AVPLink?: any;
    groupName:string
  }
}

const GroupCard: React.FC<GroupCardProps> = ({ groupId, group }) => {
  return (
    <main>
      <Link href={groupId}>
        <div className="flex flex-col w-[300px] h-[450px] bg-stone-300 s-full justify-end">
          <div className="flex ">

          </div>
          <div className="flex flex-col h-[140px] bg-rose-500 s-full text-white text-start text-2xl px-2 pr-2 pt-1">
            <div className="font-bold font-['Helvetica Now Text']">{group.groupname}</div>
            <div className="text-sm font-['Helvetica Now Text']">{group.thesisTitle}</div>
          </div>
        </div>
      </Link>
    </main>
  );
}

interface GroupCardLayoutProps {
  groupData: any;
}
const GroupCardLayout: React.FC<GroupCardLayoutProps> = ({ groupData }) => {
  const groupNames = Object.keys(groupData);
  const groupCards: React.JSX.Element[] = [];

  groupNames.forEach((groupId, index) => {
    groupCards.push(
      <GroupCard key={index} groupId={groupId} group={groupData[groupId]}/>
    )
  });

  return (
    <main>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-20">
        <>{groupCards}</>
      </div>
    </main>
  );
}

export default GroupCardLayout;