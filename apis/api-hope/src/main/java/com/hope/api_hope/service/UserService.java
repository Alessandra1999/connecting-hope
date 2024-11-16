package com.hope.api_hope.service;

import com.hope.api_hope.dto.OngDTO;
import com.hope.api_hope.dto.UserDTO;
import com.hope.api_hope.mapper.NonProfitsCampaignMapper.UserMapper;
import com.hope.api_hope.model.NonProfits;
import com.hope.api_hope.model.User;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import com.hope.api_hope.repository.UserOngRepository;
import com.hope.api_hope.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserOngRepository userOngRepository;

    public List<UserDTO> getAllUsers(){
        List<UserDTO> users = userRepository.findAll().stream().map(UserMapper::toUserDTO).toList();


        return users;
    }

    public List<OngDTO> getAllOngsByName(String name){
        List<OngDTO> dtos = userOngRepository.findByNameNonProfit(name).stream().map(nonProfit -> UserMapper.toOngDto((NonProfits) nonProfit)).toList();

        return  dtos;
    }

    public UserDTO getUserById(Long id){
        Optional<User> user = userRepository.findById(id);
        return user.map(this::convertToDTO).orElse(null);
    }

    public OngDTO getUserOngById(Long id){
        Optional<NonProfits> nonProfits = userOngRepository.findById(id);
        return nonProfits.map(this::convertOngToDTO).orElse(null);
    }

    public UserDTO createUser(UserDTO userDTO){
        User user = new User();
        user.setNameUser(userDTO.getNameUser());
        user.setPhotoUser(userDTO.getPhotoUser());
        user.setEmail(userDTO.getEmailUser());
        user.setPassword(userDTO.getPasswordUser());
        user.setAddressUser(userDTO.getAddressUser());
        userRepository.save(user);

        return convertToDTO(user);
    }


    public UserDTO updateUser(Long id, UserDTO userDTO){
        Optional<User> userOptional = userRepository.findById(id);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            user.setNameUser(userDTO.getNameUser());
            user.setPhotoUser(userDTO.getPhotoUser());
            user.setEmail(userDTO.getEmailUser());
            user.setPassword(userDTO.getPasswordUser());
            user.setAddressUser(userDTO.getAddressUser());
            userRepository.save(user);
            return convertToDTO(user);
        }
        return null;
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    private OngDTO convertOngToDTO(NonProfits nonProfits){
        OngDTO ongDTO = new OngDTO();
        ongDTO.setIdNonProfit(Math.toIntExact(nonProfits.getId()));
        ongDTO.setCnpjNonprofit(nonProfits.getCnpjNonprofit());
        ongDTO.setEmailNonprofit(nonProfits.getEmailNonprofit());
        ongDTO.setNameNonprofit(nonProfits.getNameNonProfit());
        ongDTO.setPhotoNonprofit(nonProfits.getPhotoNonProfit());
        ongDTO.setAddressNonprofit(nonProfits.getAddressNonprofit());

        return ongDTO;
    }

    private UserDTO convertToDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setIdUser(user.getId());
        user.setNameUser(userDTO.getNameUser());
        user.setPhotoUser(userDTO.getPhotoUser());
        user.setEmail(userDTO.getEmailUser());
        user.setPassword(userDTO.getPasswordUser());
        user.setAddressUser(userDTO.getAddressUser());

        return userDTO;

    }
}
