import React from 'react';

const ManageUsers = () => {
    return (
        <div className='bg-dashboard rounded-md'>
            <div className='flex md:px-5 px-3 bg-[#fccaa1] py-3 justify-between rounded-t-md'>
                <h2 className='font-bold sec-title md:text-xl '>User Management</h2>
                <h2 className='font-bold sec-title md:text-xl'>Total Users:12</h2>
            </div>
           
            <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">Photo</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Email</th>
              <th scope="col" class="px-6 py-4">Role</th>
              <th scope="col" class="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">Mark</td>
              <td class="whitespace-nowrap px-6 py-4">Otto</td>
              <td class="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap px-6 py-4">Jacob</td>
              <td class="whitespace-nowrap px-6 py-4">Thornton</td>
              <td class="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td class="whitespace-nowrap px-6 py-4">Larry</td>
              <td class="whitespace-nowrap px-6 py-4">Wild</td>
              <td class="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ManageUsers;