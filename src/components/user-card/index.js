import {
  Box,
  Stack,
  Text
} from '@chakra-ui/react';

import {
  CheckIcon,
  CloseIcon,
  EmailIcon
} from '@chakra-ui/icons';

import './style.scss';

const ActionButton = ({ color, icon }) => {
  return(
    <div className={`card-action-button ${color || ""}`}>
      { icon }
    </div>
  )
}

const UserCard = ({
  image_url = "",
  full_name,
  description
}) => {
  return(
    <section className="card-wrapper">
      <Box
        className="user-card"
        w="320px"
        h="480px"
        bg="white"
      >
        <div className="card-image-overflow-container">
          <img
            src={image_url}
            alt="profile"
            className="user-card-image"
          />
        </div>
        <Box
          className="user-info"
          p={3}
        >
          <Stack>
            <Text fontSize="2xl">
              { full_name }
            </Text>
            <div className="user-card-text-container">
              <Text>
                {description}
              </Text>
            </div>
            <section className="user-card-action-buttons">
              <ActionButton color="red" icon={<CloseIcon boxSize="1.5em" />} />
              <ActionButton color="blue" icon={<EmailIcon boxSize="1.5em" />} />
              <ActionButton color="green" icon={<CheckIcon boxSize="1.5em" />} />
            </section>
          </Stack>
        </Box>
      </Box>
    </section>
  );
};

export default UserCard;