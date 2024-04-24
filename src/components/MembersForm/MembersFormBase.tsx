import { observer } from "mobx-react-lite";

interface MembersFormBaseProps {
    onsubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    buttonText: string;
    register: any;
}

export const MembersFormBase = observer(function ({ onsubmit, buttonText, register }: MembersFormBaseProps) {
    return (
        <div>
            <form onSubmit={onsubmit}>
                <input {...register("firstName")} type="text" placeholder="First Name" />
                <input {...register("lastName")} type="text" placeholder="Last Name" />
                <input {...register("dateOfBirth")} type="date" placeholder="Date of Birth" />
                <input {...register("phone")} type="text" placeholder="Phone Number" />
                <input {...register("email")} type="email" placeholder="Email Address" />
                <button type="submit">{buttonText}</button>
            </form>
        </div>
    );
});    