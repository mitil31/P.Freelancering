import CheckOTPForm from "../authentication/CheckOTPForm";
import SendOTPForm from "../authentication/SendOTPForm";

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm />
        <CheckOTPForm />
      </div>
    </div>
  )
}

export default Auth;