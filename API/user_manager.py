class UserManager:
    def __init__(self):
        self.users = {}

    def add_user(self, user_id: str, user_data: dict):
        self.users[user_id] = user_data
        return self.users[user_id]

    def get_user(self, user_id: str):
        return self.users.get(user_id, None)