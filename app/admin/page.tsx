async function getLeads() {
  const res = await fetch("http://localhost:3000/api/leads", {
    cache: "no-store",
  });

  return res.json();
}

export default async function AdminPage() {
  const leads = await getLeads();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-black">
  <th className="p-3 border">Name</th>
  <th className="p-3 border">Email</th>
  <th className="p-3 border">Phone</th>
  <th className="p-3 border">Status</th>
  <th className="p-3 border">Message</th>
</tr>
        </thead>

        <tbody>
          {leads.map((lead: any) => (
            <tr key={lead._id}>
              <td className="border p-3">{lead.name}</td>
<td className="border p-3">{lead.email}</td>
<td className="border p-3">{lead.phone}</td>

<td className="border p-3">
  <span className="bg-yellow-200 text-black px-2 py-1 rounded">
    {lead.status}
  </span>
</td>

<td className="border p-3">{lead.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}