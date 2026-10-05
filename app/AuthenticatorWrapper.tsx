"use client"

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
// @ts-expect-error The package provides the stylesheet at runtime without a TypeScript declaration.
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

export default function AuthenticatorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticator>{children}</Authenticator>;
}