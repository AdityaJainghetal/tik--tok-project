// // src/components/StoriesRow.jsx
// export default function StoriesRow() {
//   const stories = [
//     "k_k_properties",
//     "ayushi_bal...",
//     "pawan_pat...",
//     "bitzo",
//     "abhaydi...",
//     "katre.divy",
//     "user7",
//     "user8",
//   ];

//   return (
//     <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 py-4 px-4 overflow-x-auto">
//       <div className="flex gap-4 max-w-5xl mx-auto">
//         {stories.map((name, i) => (
//           <div key={i} className="flex flex-col items-center flex-shrink-0">
//             <div className="w-16 h-16 md:w-18 md:h-18 rounded-full p-[2.5px] bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500">
//               <div className="bg-white dark:bg-black w-full h-full rounded-full p-0.5">
//                 <img
//                   src={`https://i.pravatar.cc/150?u=${i}`}
//                   alt={name}
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               </div>
//             </div>
//             <p className="text-xs mt-1 truncate w-16 text-center">{name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// src/components/StoriesRow.jsx
export default function StoriesRow() {
  const stories = [
    {
      username: "k_k_properties",
      avatar:
        "https://media.easy-peasy.ai/a43d171a-45ce-45cf-b422-649eecc4ffb4/090134e9-c882-491b-922b-4b50b057f0e6.png",
    },
    {
      username: "ayushi_bal...",
      avatar:
        "https://images.pexels.com/photos/15618748/pexels-photo-15618748/free-photo-of-smiling-woman-face.jpeg",
    },
    {
      username: "pawan_pat...",
      avatar:
        "https://freerangestock.com/sample/97566/bearded-man-smiling-at-camera.jpg",
    },
    {
      username: "bitzo",
      avatar:
        "https://p1.hippopx.com/preview/589/664/959/indian-boy-spectackles-young.jpg",
    },
    {
      username: "abhaydi...",
      avatar:
        "https://p2.piqsels.com/preview/433/855/699/person-boy-handsome-young.jpg",
    },
    {
      username: "katre.divy",
      avatar:
        "https://media.easy-peasy.ai/045a086d-d6df-40f9-854b-4834fd826df4/adcf461e-8171-4c3a-a256-0e1b15dabaaf.png",
    },
    {
      username: "user7",
      avatar:
        "https://p1.hippopx.com/preview/246/367/614/rishi-gangoly-man-indian-professional-male-thinking.jpg",
    },
    {
      username: "user8",
      avatar:
        "https://images.pexels.com/photos/20190302/pexels-photo-20190302.jpeg?cs=srgb&dl=pexels-daredevil-20190302.jpg&fm=jpg",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 py-4 px-4 overflow-x-auto">
      <div className="flex gap-4 max-w-5xl mx-auto">
        {stories.map((story, i) => (
          <div key={i} className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 md:w-18 md:h-18 rounded-full p-[2.5px] bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500">
              <div className="bg-white dark:bg-black w-full h-full rounded-full p-0.5">
                <img
                  src={story.avatar}
                  alt={story.username}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <p className="text-xs mt-1 truncate w-16 text-center">
              {story.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
