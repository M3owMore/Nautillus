from nautillus.settings import FERNET_KEY
from cryptography.fernet import Fernet

key = FERNET_KEY
fernet = Fernet(key)
print(key)
encrypted_course_id = fernet.encrypt(str(3).encode()).decode()
print(encrypted_course_id)
decrypted_course_id = int(fernet.decrypt(encrypted_course_id).decode())
print(decrypted_course_id)
