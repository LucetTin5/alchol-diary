import { FormControl, FormLabel } from "@chakra-ui/react";

interface FormGroupProps {
  label: string;
  required: boolean;
  children: React.ReactNode;
}
export default function FormGroup({
  label,
  required,
  children,
}: FormGroupProps) {
  return (
    <FormControl width="sm" m="0 auto" pl={5} py={2}>
      <FormLabel fontSize="sm" fontWeight="bold">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </FormLabel>
      {children}
    </FormControl>
  );
}
