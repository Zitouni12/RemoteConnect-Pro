import React from 'react';
import {
    Card,
    CardContent,
    Button,
    Box,
    Typography,
    Chip,
    Divider,
    Tooltip,
    IconButton
} from '@mui/material';
import {
    Gamepad,
    LockOpen,
    Visibility,
    Settings,
    Info
} from '@mui/icons-material';

const ControlPanel = ({ hasControl, onRequestControl, onReleaseControl }) => {
    return (
        <Card
            sx={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 3,
                mb: 2
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6" fontWeight="bold" color="primary">
                        Panneau de Contrôle
                    </Typography>
                    <Tooltip title="Informations sur le contrôle">
                        <IconButton size="small">
                            <Info />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <Chip
                        icon={hasControl ? <Gamepad /> : <Visibility />}
                        label={hasControl ? 'Contrôle actif' : 'Mode spectateur'}
                        color={hasControl ? 'success' : 'default'}
                        variant={hasControl ? 'filled' : 'outlined'}
                        sx={{ fontWeight: 'bold' }}
                    />
                    
                    {hasControl && (
                        <Typography variant="body2" color="text.secondary">
                            Timeout automatique dans 2 minutes d'inactivité
                        </Typography>
                    )}
                </Box>

                <Divider sx={{ mb: 3 }} />

                <Box display="flex" gap={2}>
                    {!hasControl ? (
                        <Button
                            variant="contained"
                            size="large"
                            onClick={onRequestControl}
                            startIcon={<Gamepad />}
                            sx={{
                                flex: 1,
                                py: 1.5,
                                borderRadius: 2,
                                background: 'linear-gradient(45deg, #4caf50, #8bc34a)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #388e3c, #689f38)'
                                },
                                fontWeight: 'bold'
                            }}
                        >
                            Demander le contrôle
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            size="large"
                            onClick={onReleaseControl}
                            startIcon={<LockOpen />}
                            sx={{
                                flex: 1,
                                py: 1.5,
                                borderRadius: 2,
                                background: 'linear-gradient(45deg, #f44336, #ff5722)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #d32f2f, #e64a19)'
                                },
                                fontWeight: 'bold'
                            }}
                        >
                            Libérer le contrôle
                        </Button>
                    )}
                    
                    <Tooltip title="Paramètres avancés">
                        <IconButton
                            sx={{
                                border: '2px solid',
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': {
                                    background: 'primary.main',
                                    color: 'white'
                                }
                            }}
                        >
                            <Settings />
                        </IconButton>
                    </Tooltip>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ControlPanel;
