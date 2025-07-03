import Header from "../components/Header";
import React, { useState } from "react";

const defaultUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://ui-avatars.com/api/?name=John+Doe&background=4ade80&color=fff&size=128",
  joined: "January 2024",
  bio: "Nature enthusiast. Herbal medicine explorer."
};

const Profile = () => {
  const [user, setUser] = useState(defaultUser);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    setUser(editData);
    setEditMode(false);
    console.log("Updated profile:", editData);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-10">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col items-center">
          {editMode ? (
            <>
              <input
                type="text"
                name="avatar"
                value={editData.avatar}
                onChange={handleChange}
                className="w-28 h-28 rounded-full border-4 border-green-200 mb-4 text-center px-2 py-1 text-sm"
                placeholder="Avatar URL"
              />
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                className="text-2xl font-bold text-green-800 mb-1 text-center px-2 py-1"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                className="text-gray-600 mb-2 text-center px-2 py-1"
                placeholder="Email"
              />
              <input
                type="text"
                name="joined"
                value={editData.joined}
                onChange={handleChange}
                className="text-sm text-gray-500 mb-4 text-center px-2 py-1"
                placeholder="Joined"
              />
              <textarea
                name="bio"
                value={editData.bio}
                onChange={handleChange}
                className="text-center text-gray-700 mb-4 px-2 py-1 w-full"
                placeholder="Bio"
                rows={2}
              />
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition mb-2"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className="text-gray-500 hover:text-gray-700 text-sm"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <img src={user.avatar} alt={user.name} className="w-28 h-28 rounded-full border-4 border-green-200 mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-1">{user.name}</h2>
              <p className="text-gray-600 mb-2">{user.email}</p>
              <p className="text-sm text-gray-500 mb-4">Member since {user.joined}</p>
              <p className="text-center text-gray-700 mb-4">{user.bio}</p>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition"
                onClick={() => {
                  setEditMode(true);
                  setEditData(user);
                }}
              >
                Update Profile
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;