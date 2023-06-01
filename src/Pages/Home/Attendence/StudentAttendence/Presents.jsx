import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

const Presents = ({ option, selectedDate }) => {
    const { name, roll } = option;

    const date = format(selectedDate, "PP")

    const handlePresent = event => {
        event.preventDefault();
        console.log('hello')
        const form = event.target;
        const name = form.name.value;
        const roll = form.roll.value;
        const slot = form.slot.value;
        console.log(name, roll, date, slot)
        const present = {
            date,
            studentName: name,
            studentRoll: roll,
            attend: slot
        }
        console.log(present)

        fetch('http://localhost:5000/presents', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(present)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {

                    toast.success("Attendence Confirmed")
                    // refetch()
                }
                else {
                    toast.error(data.message)
                }

            })
    }
    return (
        <div className="card bg-base-100 shadow-xl ">
            <form className="card-body text-center" onSubmit={handlePresent}>


                <input name='name' type="text" defaultValue={name} disabled className="input w-full input-bordered " />
                <input name='roll' type="number" defaultValue={roll} disabled className="input w-full input-bordered" />
                <select name='slot' class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Select option</option>
                    <option name='present'>Present</option>
                    <option name='absent'>Absent</option>
                </select>
                <input className=' btn btn-accent w-full' type="submit" value='submit' />

            </form>
        </div>
    );
};

export default Presents;