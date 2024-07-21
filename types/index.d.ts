declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type UserType = "creator" | "editor" | "viewer";

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type RoomAccesses = Record<string, AccessType>;

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};
